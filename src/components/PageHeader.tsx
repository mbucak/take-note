import React from 'react'

export default function PageHeader(props: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 16
      }}
    >
      <h1>{props.title}</h1>
      {props.children}
    </div>
  )
}
