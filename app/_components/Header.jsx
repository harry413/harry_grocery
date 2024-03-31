import { Button } from '@/components/ui/button'
import { LayoutGrid, Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

function Header() {
  return (
    <div className='flex items-center p-5 shadow-md justify-between'>
        <div className='flex items-center gap-8'>
        {/* <Image src='' alt='logo'
            height={100}
            width={150}
         /> */}
           
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <h2 className='hidden md:flex gap-1 items-center border rounded-full p-2 px-10 bg-slate-200'>
                        <LayoutGrid className='h-5 w-5'/> 
                        Category
                    </h2>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <div className='md:flex items-center gap-3 border rounded-full p-2 px-5 hidden'>
                <Search className='h-4 w-4'/>
                <input type="text" placeholder='Search' className='outline-none'/>
            </div>
        </div>
        <div className='flex items-center gap-5'>
            <h2 className='flex items-center gap-2 text-lg'><ShoppingBag/>00</h2>
            <Button>
                Login
            </Button>
        </div>
    </div>
  )
}

export default Header