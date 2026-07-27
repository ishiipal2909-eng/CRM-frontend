        os = frappe.get_all(
            "Other Servise",
            fields=[
                "title",
                "image",
                "description",
                "is_favourite"
                
               
            ],
        )
        return {"status": "success", "data": os}
    except Exception as e:
        return {"status": "error", "message": str(e)}



