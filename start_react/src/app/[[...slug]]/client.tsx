'use client'
 
import React from 'react'
import dynamic from 'next/dynamic'
 
const Router = dynamic(() => import('../../routing'), { ssr: false })
 
export function ClientOnly() {
  return <div> jkshfhdsjf</div>
}