import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/dashboard/new/')({
  component: () => <div>Hello /dashboard/new/!</div>,
})
