export function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository?.full_name ?? 'Default'}</strong>
      <p>{repository?.description ?? "I'm a repository"}</p>

      <a href={repository?.html_url ?? 'https://github.com/'}>
        Acessar repositórios
      </a>
    </li>
  );
}
