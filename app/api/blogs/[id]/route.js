import connectMongoDb from "@/libs/mongodb"
import Blog from "@/models/blog"
import { NextResponse } from "next/server"

export async function PUT(req, { params }) {
	const { id } = params
	const { newTitle: title, newDescription: description } = await req.json()
	await connectMongoDb()
	await Blog.findByIdAndUpdate(id, { title, description })
	return NextResponse.json({ message: "Updated" }, { status: 200 })
}