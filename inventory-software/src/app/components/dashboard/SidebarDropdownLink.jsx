import React from 'react';

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import CollapsibleLink from './CollapsibleLink';

export default function SidebarDropdownLink({title,links,icon}) {
    const Icon = icon;
  return (
    <Collapsible>
        <CollapsibleTrigger className='flex items-center space-x-2 p-2'>
            <Icon className='w-4 h-4' />
            <span>{title}</span>
        </CollapsibleTrigger>
        <CollapsibleContent>
        {
            links.map((item,i)=>{
                return(
                    <CollapsibleLink key={i} href={item.href} title={item.title}/>
                )
            })
        }
        
        </CollapsibleContent>
    </Collapsible>
  )
}
