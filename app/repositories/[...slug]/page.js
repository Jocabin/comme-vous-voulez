import CommitList from "@/components/CommitList"
import ListSkeleton from "@/components/ListSkeleton"
import { gh_fetch } from "@/utils"
import { Suspense } from "react"

export default async function RepositoryPage({ params }) {
        const { slug } = await params
        const login = slug[0]
        const repo = slug[1]

        const repo_details = await gh_fetch(`/repos/${login}/${repo}`)
        const repo_commits = await gh_fetch(`/repos/${login}/${repo}/commits`)

        return (
                <>
                        <h2 className="text-2xl font-bold">{repo_details.name}</h2>
                        <p>{repo_details.description}</p>

                        <div className="mt-8">
                                <h3 className="font-bold font-2xl">Commits ({repo_details.default_branch})</h3>

                                <Suspense key={login + repo} fallback={<ListSkeleton />}>
                                        <CommitList data={repo_commits} />
                                </Suspense>
                        </div>
                </>
        )
}