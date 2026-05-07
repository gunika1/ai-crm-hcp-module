import os
from dotenv import load_dotenv

from langchain_groq import ChatGroq
from langgraph.prebuilt import create_react_agent

from app.tools import (
    log_interaction,
    edit_interaction,
    search_hcp,
    recommend_followup,
    product_information,
)

load_dotenv()

llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    groq_api_key=os.getenv("GROQ_API_KEY")
)

tools = [
    log_interaction,
    edit_interaction,
    search_hcp,
    recommend_followup,
    product_information,
]

agent = create_react_agent(llm, tools)