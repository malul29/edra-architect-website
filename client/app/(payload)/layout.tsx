/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import type { ServerFunctionClient } from 'payload'
import configPromise from '@payload-config'

import '@payloadcms/next/css'

import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts'
import React from 'react'

import { importMap } from './admin/importMap'
import './custom.scss'

const serverFunction: ServerFunctionClient = async function (args) {
    'use server'
    return handleServerFunctions({
        ...args,
        config: configPromise,
        importMap,
    })
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <RootLayout config={configPromise} importMap={importMap} serverFunction={serverFunction}>
            {children}
        </RootLayout>
    )
}
