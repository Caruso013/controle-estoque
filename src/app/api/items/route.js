import dbConnect from '@/utils/db';
import Item from '@/models/Item';
import { NextResponse } from 'next/server';

export async function GET() {
  await dbConnect();
  const items = await Item.find();
  return NextResponse.json(items);
}

export async function POST(request) {
  await dbConnect();
  const data = await request.json();
  const newItem = new Item(data);
  await newItem.save();
  return NextResponse.json(newItem);
}

export async function DELETE(request) {
  await dbConnect();
  const { id } = request.query;
  await Item.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Item deleted' });
}
