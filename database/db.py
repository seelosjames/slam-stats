import psycopg2

def get_db_connection():
    return psycopg2.connect(
        dbname="slam_stats",
        user="postgres",
        password="12345678",
        host="localhost",
        port="5433",
    )