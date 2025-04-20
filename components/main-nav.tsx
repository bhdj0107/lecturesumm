"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Sparkles } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 flex">
      <Link href="/dashboard" className="mr-6 flex items-center space-x-2">
        <Sparkles className="h-6 w-6 text-blue-500" />
        <span className="font-bold">LectureSumm</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/dashboard"
          className={cn(
            "transition-colors hover:text-primary",
            pathname === "/dashboard" ? "text-primary" : "text-muted-foreground",
          )}
        >
          대시보드
        </Link>
        <Link
          href="/dashboard/videos"
          className={cn(
            "transition-colors hover:text-primary",
            pathname === "/dashboard/videos" || pathname.startsWith("/dashboard/videos/")
              ? "text-primary"
              : "text-muted-foreground",
          )}
        >
          내 동영상
        </Link>
        <Link
          href="/dashboard/chat"
          className={cn(
            "transition-colors hover:text-primary",
            pathname === "/dashboard/chat" ? "text-primary" : "text-muted-foreground",
          )}
        >
          대화형 검색
        </Link>
        <Link
          href="/dashboard/upload"
          className={cn(
            "transition-colors hover:text-primary",
            pathname === "/dashboard/upload" ? "text-primary" : "text-muted-foreground",
          )}
        >
          업로드
        </Link>
        <Link
          href="/dashboard/settings"
          className={cn(
            "transition-colors hover:text-primary",
            pathname === "/dashboard/settings" ? "text-primary" : "text-muted-foreground",
          )}
        >
          설정
        </Link>
      </nav>
    </div>
  )
}
