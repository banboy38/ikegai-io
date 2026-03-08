"use client"

import {
    LayoutGrid, Bookmark,
    MoreVertical, Eye, Pencil, Play, Copy
} from "lucide-react"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function SolutionCard({
    title,
    description,
    tags,
    gradient
}: {
    title: string,
    description: string,
    tags: string[],
    gradient: string
}) {
    return (
        <Card style={{ backgroundColor: gradient }} className={`border-0 rounded-4xl py-2 flex flex-col h-[370px] w-full text-white shadow-sm hover:shadow-md transition-all overflow-hidden`}>

            <CardHeader className="p-4 pb-0 space-y-0 shrink-0">
                <div className="flex justify-between items-start mb-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <LayoutGrid className="w-[20px] h-[20px] text-white" />
                    </div>
                    <div className="flex items-center">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20 hover:text-white rounded-full">
                            <Bookmark className="w-[18px] h-[18px]" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20 hover:text-white rounded-full">
                            <MoreVertical className="w-[18px] h-[18px]" />
                        </Button>
                    </div>
                </div>
                <h4 className="text-[26px] font-bold leading-tight line-clamp-2">{title}</h4>
            </CardHeader>

            <CardContent className="p-4 pt-1 pb-2 flex-1 flex flex-col min-h-0 overflow-hidden">
                <p className="text-[13px] text-white/80 line-clamp-3 mb-3 leading-relaxed">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto shrink-0 overflow-hidden">
                    {tags.map((tag, i) => (
                        <Badge
                            key={i}
                            variant="ghost"
                            className="bg-white/20 text-white/90 hover:bg-white/30 border-0 font-medium text-[11px] px-2.5 py-0.5"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>

            <div className="px-3 pb-2 w-full shrink-0 mt-auto">
                <div className="w-full bg-white/10 backdrop-blur-md rounded-full p-1.5 flex items-center justify-start group/nav">
                    <div className="flex items-center gap-1 pl-1 justify-between w-full">

                        {/* View Button */}
                        <button className="group/btn flex items-center text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300 rounded-full p-2">
                            <Eye className="w-[16px] h-[16px] shrink-0" />
                            <span className="overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 max-w-0 opacity-0 ml-0 group-hover/btn:max-w-[50px] group-hover/btn:opacity-100 group-hover/btn:ml-2">
                                View
                            </span>
                        </button>

                        {/* Edit Button */}
                        <button className="group/btn flex items-center text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300 rounded-full p-2">
                            <Pencil className="w-[16px] h-[16px] shrink-0" />
                            <span className="overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 max-w-0 opacity-0 ml-0 group-hover/btn:max-w-[40px] group-hover/btn:opacity-100 group-hover/btn:ml-2">
                                Edit
                            </span>
                        </button>

                        {/* Copy Button */}
                        <button className="group/btn flex items-center text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300 rounded-full p-2">
                            <Copy className="w-[16px] h-[16px] shrink-0" />
                            <span className="overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 max-w-0 opacity-0 ml-0 group-hover/btn:max-w-[50px] group-hover/btn:opacity-100 group-hover/btn:ml-2">
                                Copy
                            </span>
                        </button>

                        {/* Play Button - EXPANDED BY DEFAULT */}
                        <button className="group/btn flex items-center text-white/90 hover:text-white bg-white/20 group-hover/nav:bg-transparent group-hover/btn:bg-white/20 transition-all duration-300 rounded-full p-2">
                            <Play className="w-[16px] h-[16px] shrink-0" />
                            {/* Notice: Default max-w is [60px] and opacity is 100. On nav hover, it goes to 0. On btn hover, it forces back to [60px] */}
                            <span className="overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 max-w-[60px] opacity-100 ml-2 group-hover/nav:max-w-0 group-hover/nav:opacity-0 group-hover/nav:ml-0 group-hover/btn:max-w-[60px] group-hover/btn:opacity-100 group-hover/btn:ml-2">
                                Play
                            </span>
                        </button>

                    </div>
                </div>
            </div>

        </Card>
    )
}