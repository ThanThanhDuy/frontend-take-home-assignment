import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'
import clsx from 'clsx'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */
const filterTabs: string[] = ['All', 'Pending', 'Completed']

const Index = () => {
  const [tabValue, setTabValue] = useState<string>('All')

  const handleChangeTab = (tab: string) => {
    setTabValue(tab)
  }

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
        <Tabs.Root
          className="mt-10"
          value={tabValue}
          onValueChange={(tab) => {
            handleChangeTab(tab)
          }}
        >
          <Tabs.List>
            {filterTabs.map((tab) => (
              <Tabs.Trigger
                key={tab}
                className={clsx(
                  'mr-2 rounded-full border border-gray-200 px-6 py-3 font-bold',
                  {
                    'bg-gray-700': tab === tabValue,
                    'text-white': tab === tabValue,
                  }
                )}
                value={tab}
              >
                {tab}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Tabs.Root>
        <div className="pt-10">
          <TodoList tab={tabValue} />
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
