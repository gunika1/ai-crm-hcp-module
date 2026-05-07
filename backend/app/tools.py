from langchain.tools import tool

@tool
def log_interaction(interaction: str):
    """Log HCP interaction details"""
    return f"Interaction logged: {interaction}"

@tool
def edit_interaction(interaction_id: str, update: str):
    """Edit existing interaction"""
    return f"Interaction {interaction_id} updated with: {update}"

@tool
def search_hcp(name: str):
    """Search HCP details"""
    return f"HCP found: Dr. {name}"

@tool
def recommend_followup(notes: str):
    """Generate follow-up recommendation"""
    return f"Recommended follow-up based on: {notes}"

@tool
def product_information(product_name: str):
    """Provide product knowledge"""
    return f"Information about product: {product_name}"