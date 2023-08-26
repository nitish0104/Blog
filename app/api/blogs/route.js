import connectMongoDb from "@/libs/mongodb"
import Blog from "@/models/blog"
import { NextResponse } from "next/server"

export async function POST(req) {
	const { title, description } = await req.json()
	await connectMongoDb()
	await Blog.create({ title, description })
	return NextResponse.json({ message: "Blog Created" }, { status: 200 })
}
export async function GET(req) {
	await connectMongoDb()
	const blogs = await Blog.find()
	return NextResponse.json(blogs, { status: 200 })
}
export async function DELETE(req) {
	const id = req.nextUrl.searchParams.get("id")
	await connectMongoDb()
	await Blog.findByIdAndDelete(id)
	return NextResponse.json({ message: "Blog Deleted" }, { status: 200 })
}