import ListSkeleton from '@/components/ListSkeleton';
import ResultList from '@/components/ResultList';
import SearchForm from '@/components/SearchForm'
import { Suspense } from 'react';

export default async function Home({ searchParams }) {
        const { search, source } = await searchParams

        return (
                <>
                        <SearchForm />

                        <Suspense key={search + source} fallback={<ListSkeleton />}>
                                <ResultList searchParams={searchParams} />
                        </Suspense>
                </>
        )
}
