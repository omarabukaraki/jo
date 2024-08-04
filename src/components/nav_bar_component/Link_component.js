import React from 'react'
import Link from "next/link";

const LinkComponent = (props) => {
  return (
        <Link href={props.route} className=" text-white mx-4 font-medium">{props.linkName}</Link>
  )
}

export default LinkComponent
