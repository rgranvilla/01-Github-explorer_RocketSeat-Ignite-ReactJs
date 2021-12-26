export function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository?.name ?? 'Default'}</strong>
      <p>{repository?.description ?? "I'm a repository"}</p>

      <a href={repository?.link ?? 'https://github.com/'}>
        Acessar repositórios
      </a>
    </li>
  );
}
