import FixedHeader from '@/app/components/dashboard/FixedHeader'
import OptionCard from '@/app/components/dashboard/OptionCard'
import { Boxes, Component, RulerDimensionLine, ScrollText, Shirt, Warehouse } from 'lucide-react'
import React from 'react'

export default function Inventory() {
  const optionCards = [
    {
      title:"Item Groups",
      description:"Create multiple variants of the same item using item groups",
      itemLink: "/dashboard/inventory/itemgroups/new",
      linkTitle: "New Item Group",
      enabled: true,
      icon: Boxes,

    },
    {
      title:"Items",
      description:"Create standalone items and services that you buy and sell",
      itemLink: "/dashboard/inventory/items/new",
      linkTitle: "New Item",
      enabled: true,
      icon: Shirt,

    },
    {
      title:"Categories",
      description:"Bundle different items together and sell them as kits",
      itemLink: "/dashboard/inventory/categories/new",
      linkTitle: "New Category",
      enabled: true,
      icon: Component,

    },
    {
      title:"Brands",
      description:"Tweak your item prices for specific contacts or transactions",
      itemLink: "/dashboard/inventory/brands/new",
      linkTitle: "New Brand",
      enabled: true,
      icon: ScrollText,

    },
    {
      title:"Warehouse",
      description:"Tweak your item prices for specific contacts or transactions",
      itemLink: "/dashboard/inventory/warehouse/new",
      linkTitle: "New Warehouse",
      enabled: true,
      icon: Warehouse,

    },
    {
      title:"Units",
      description:"Tweak your item prices for specific contacts or transactions",
      itemLink: "/dashboard/inventory/units/new",
      linkTitle: "New Unit",
      enabled: true,
      icon: RulerDimensionLine,

    }
  ]

  return (
    <div>
        <FixedHeader newItemLink="/dashboard/inventory/items/new"/>
        <div className='grid grid-col-1 lg:grid-cols-2 py-8 px-16 gap-6'>
          {
            optionCards.map((card,i)=>{
              return(
                <OptionCard key={i} optionData={card}/>
              )
            })
          }


        </div>
    </div>
  )
}
