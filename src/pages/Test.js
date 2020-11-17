import React, { Component } from 'react'

export const a = 1
export const b = 2
export const c = 3

export default function (props) {

    return (
        <>
            <div style={{ display: 'flex' }}>
                {props.left}
                {props.children}
                {props.right}

            </div>
        </>
    )
}

