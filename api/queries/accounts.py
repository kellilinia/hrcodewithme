import os
from psycopg_pool import ConnectionPool
pool = ConnectionPool(conninfo=os.environ.get("postgresql://code_with_me:code_with_me@postgres/code_with_me"))
