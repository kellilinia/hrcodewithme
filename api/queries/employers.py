from queries.pool import pool
from pydantic import BaseModel, Field
from typing import List, Optional


class SearchIn(BaseModel):
    fullstack: Optional[bool]
    frontend: Optional[bool]
    backend: Optional[bool]
    javascript: Optional[bool]
    python: Optional[bool]
    java: Optional[bool]
    html: Optional[bool]
    coding_since: int = Field(default=2024)


class SearchOut(BaseModel):
    coder_id: int
    first_name: str
    last_name: str
    fullstack: bool
    frontend: bool
    backend: bool
    javascript: bool
    python: bool
    java: bool
    html: bool
    coding_since: int


class SearchRepository:
    def employer_search(self, coder: SearchIn) -> List[SearchOut]:
        selected_fields = [
            "fullstack",
            "frontend",
            "backend",
            "javascript",
            "python",
            "java",
            "html",
        ]
        # filter through selected_fields and check if selected True from coder
        # getattr() conditional if coder has field true
        selected_skills = [
            field for field in selected_fields if getattr(coder, field)
        ]

        if not selected_skills:
            return []

        with pool.connection() as conn:
            with conn.cursor() as db:
                # skills_string = ", ".join(selected_skills)
                selected_skills_conditions = " AND ".join(
                    [f"{field} = true" for field in selected_skills]
                )
                query = (
                    "SELECT coders.coder_id, "
                    "accounts.first_name, "
                    "accounts.last_name, "
                    "coders.fullstack, "
                    "coders.frontend, "
                    "coders.backend, "
                    "coders.javascript, "
                    "coders.python, "
                    "coders.java, "
                    "coders.html, "
                    "coders.coding_since "
                    "FROM coders "
                    "INNER JOIN accounts ON coders.coder_id = accounts.id "
                    "WHERE " + selected_skills_conditions + " "
                    "AND coders.open_to_work = 'true'"
                )
                result = db.execute(query)
                rows = result.fetchall()

                search_results = []
                for row in rows:
                    (
                        coder_id,
                        first_name,
                        last_name,
                        fullstack,
                        frontend,
                        backend,
                        javascript,
                        python,
                        java,
                        html,
                        coding_since,
                    ) = row
                    if coding_since <= coder.coding_since:
                        # will need to make coding_since required
                        search_results.append(
                            SearchOut(
                                coder_id=coder_id,
                                first_name=first_name,
                                last_name=last_name,
                                fullstack=fullstack,
                                backend=backend,
                                frontend=frontend,
                                javascript=javascript,
                                python=python,
                                java=java,
                                html=html,
                                coding_since=coding_since,
                            )
                        )

                return search_results
