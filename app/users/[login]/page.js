import DateLabel from "@/components/DateLabel";
import ListSkeleton from "@/components/ListSkeleton";
import ReposList from "@/components/ReposList";
import { gh_fetch } from "@/utils"
import Image from "next/image";
import { Suspense } from "react";

export default async function UserPage({ params }) {
        const { login } = await params

        const user_details = await gh_fetch('/users/' + login)
        const user_repos = await gh_fetch('/users/' + login + '/repos')

        return (
                <>
                        <div className="flex gap-4 items-center">
                                <Image alt={login} width="100" height="100" className="rounded-full border" src={user_details.avatar_url} />

                                <div>
                                        <h2 className="text-2xl font-bold">{user_details.name}</h2>
                                        <p className="text-slate-600">{user_details.login}</p>
                                </div>
                        </div>

                        <p className="mt-4">{user_details.bio}</p>
                        <p className="text-slate-600">{user_details.location}</p>
                        <p>Joined over <DateLabel date={user_details.created_at} /></p>

                        <Suspense key={login} fallback={<ListSkeleton />}>
                                <ReposList data={user_repos} />
                        </Suspense>
                </>
        )
}