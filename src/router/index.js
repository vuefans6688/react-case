import LoginForm from '../views/login-form'
import MostPopular from '../views/most-popular'
import Person from '../views/person'
import Toggle from '../views/toggle'
import FadeOut from '../views/fade-out'
import UseRef from '../views/use-ref'
import FormSubmit from '../views/form-submit'
import TaskList from '../views/task-list'
import NewsList from '../views/news-list'
import Diffing from '../views/diffing'
import Students from '../views/students'
import Search from '../views/search'
import Polling from '../views/polling'
import First from '../views/first'
import Human from '../views/human'
import ReactExtension from '../views/react-extension'
import Hooks from '../views/hooks'
import UseFragment from '../views/use-fragment'
import UseContext from '../views/use-context'
import Optimize from '../views/optimize'
import RenderProps from '../views/render-props'
import ErrorBoundary from '../views/error-boundary'

// 集中式管理路由
const routes = [
  {
    path: '/login-form',
    component: LoginForm
  },
  {
    path: '/most-popular',
    component: MostPopular
  },
  {
    path: '/person',
    component: Person
  },
  {
    path: '/toggle',
    component: Toggle
  },
  {
    path: '/fade-out',
    component: FadeOut
  },
  {
    path: '/use-ref',
    component: UseRef
  },
  {
    path: '/form-submit',
    component: FormSubmit
  },
  {
    path: '/task-list',
    component: TaskList
  },
  {
    path: '/news-list',
    component: NewsList
  },
  {
    path: '/diffing',
    component: Diffing
  },
  {
    path: '/students',
    component: Students
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/polling',
    component: Polling
  },
  {
    path: '/first',
    component: First
  },
  {
    path: '/human',
    component: Human
  },
  {
    path: '/react-extension',
    component: ReactExtension
  },
  {
    path: '/hooks',
    component: Hooks
  },
  {
    path: '/use-fragment',
    component: UseFragment
  },
  {
    path: '/use-context',
    component: UseContext
  },
  {
    path: '/optimize',
    component: Optimize
  },
  {
    path: '/render-props',
    component: RenderProps
  },
  {
    path: '/error-boundary',
    component: ErrorBoundary
  }
]

export default routes