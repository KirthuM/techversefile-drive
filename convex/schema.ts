import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export const fileTypes = v.union(
  v.literal("image"),
  v.literal("csv"),
  v.literal("pdf"),
  v.literal("doc"),
  v.literal("docx"),
  v.literal("xls"),
  v.literal("xlsx"),
  v.literal("ppt"),
  v.literal("pptx"),
  v.literal("text"),
  v.literal("zip"),
);

export default defineSchema({
  files: defineTable({ 
    name: v.string(),
    type: fileTypes, 
    orgId: v.string(), 
    fileId: v.id("_storage"), 
  }).index(
    "by_orgId",
    ["orgId"]
  ),
  users: defineTable({
    tokenIdentifier: v.string(),
    orgIds: v.array(v.string()),
  }).index("by_tokenIdentifier", ["tokenIdentifier"]),
});
