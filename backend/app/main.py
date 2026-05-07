from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.schemas import ChatRequest

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "AI CRM Backend Running"}

@app.post("/chat")
async def chat(request: ChatRequest):
    extracted_data = {
        "hcpName": "Dr. Ananya Sharma",
        "interactionType": "Meeting",
        "topicsDiscussed": "Product X efficacy, dosage safety, and clinical outcomes",
        "materialsShared": "Brochures, research papers, sample kits",
        "sentiment": "Positive",
        "outcomes": "Doctor showed strong prescribing interest and requested additional materials",
        "followUpActions": "Schedule follow-up meeting next Monday",
    }

    return {
        "response": "Interaction logged successfully. The CRM form has been auto-filled and a follow-up recommendation has been generated.",
        "formData": extracted_data,
    }