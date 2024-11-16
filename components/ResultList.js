import { gh_fetch } from '@/utils';
import Link from 'next/link';

export default async function ResultList({ searchParams }) {
        const { search, source } = await searchParams
        const result = { users: null, repos: null }

        if (search) {
                result.users = source === 'repos' ? null : (await gh_fetch(`/search/users?q=${search}`)).items
                result.repos = source === 'users' ? null : (await gh_fetch(`/search/repositories?q=${search}`)).items
        }

        return (
                <div>
                        {result.repos && (
                                <section className='py-5'>
                                        <h2 className='font-bold'>Repositories</h2>

                                        <ul>
                                                {result.repos.map(el => (
                                                        <li key={el.id}>
                                                                <Link href={`/repositories/${el.full_name}`}>{el.full_name}</Link>
                                                        </li>
                                                ))}
                                        </ul>
                                </section>
                        )}

                        {result.users && (
                                <section className='py-5'>
                                        <h2 className='font-bold'>Users</h2>

                                        <ul>
                                                {result.users.map(el => (
                                                        <li key={el.id}>
                                                                <Link href={"/users/" + el.login}>{el.login}</Link>
                                                        </li>
                                                ))}
                                        </ul>
                                </section>
                        )}
                </div>
        )
}