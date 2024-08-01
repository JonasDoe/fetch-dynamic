async function fetchNews() {
    try {
        const res = await fetch('http://localhost:3001/api/news', {cache: 'no-store'});
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}

export default async function Page() {
    const data = await fetchNews()
    return <main>{Array.isArray(data)?JSON.stringify(data.reverse()):`fetched data is not a list but ${JSON.stringify(data)}`}</main>
}

export const dynamic = 'force-dynamic';
