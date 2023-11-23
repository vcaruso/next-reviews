import { searchReview } from "@/lib/reviews";
import { NextResponse } from "next/server";

export async function GET(request) {
  const query = request.nextUrl.searchParams.get("query");
  const reviews = await searchReview(query);
  console.log("api/search:", query);
  return NextResponse.json(reviews);
}
