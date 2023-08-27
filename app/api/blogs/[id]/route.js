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

export async function GET({ params }) {
	const { id } = params
	await connectMongoDb()
	const blog = await Blog.findOne({ _id: id })
	return NextResponse.json({ blog }, { status: 200 })

}