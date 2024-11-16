'use client'

import { useRouter, useSearchParams } from "next/navigation"

export default function SearchBar({ }) {
        const router = useRouter()
        const searchParams = useSearchParams()

        let source = searchParams.get('source')
        const authorizedSourceValues = ["all", "users", "repos"]
        const radios = [{
                label: 'All',
                value: 'all'
        },
        {
                label: 'Repositories',
                value: 'repos'
        },
        {
                label: 'Users',
                value: 'users'
        }]

        if (!authorizedSourceValues.includes(source)) {
                source = "all"
        }

        async function search(e) {
                e.preventDefault()

                const searchQuery = e.target.search.value
                const source = e.target.source.value

                router.push(`/?source=${source}&search=${searchQuery}`)
        }

        return (
                <form className="flex flex-col gap-2 mt-8" onSubmit={search}>
                        <div className="flex gap-2">
                                <input
                                        type="text"
                                        placeholder="Search user or repository..."
                                        className="border rounded px-2 py-1 w-96"
                                        required
                                        defaultValue={searchParams.get('search')}
                                        name="search" />

                                <button type="submit" className="border rounded px-4 py-1 bg-indigo-500 text-white">
                                        Search
                                </button>

                                <button type="reset" className="border rounded px-4">Reset</button>
                        </div>

                        <div className="flex gap-4">
                                {radios && radios.map(el => (
                                        <fieldset key={el.value} className="flex gap-2">
                                                <input
                                                        id={"radio-" + el.value}
                                                        type="radio"
                                                        name="source"
                                                        defaultChecked={el.value === source}
                                                        value={el.value}
                                                />
                                                <label htmlFor={"radio-" + el.value}>{el.label}</label>
                                        </fieldset>
                                ))}
                        </div>
                </form>
        )
}