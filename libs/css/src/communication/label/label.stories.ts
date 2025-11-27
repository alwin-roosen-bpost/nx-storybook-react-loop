import type { Meta, StoryFn } from '@storybook/html'

import { wrapWithContainer } from '@my-workspac/css/wrapWithContainer'

const meta: Meta<{label: string, disabled: boolean, formControlId: string, ariaLabel: string, ariaLabelledBy: string}> = {
  title: 'Communication/Label',
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
      description: 'label text content',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Whether the label is in a disabled state',
    },
    formControlId: {
      name: 'For',
      control: 'text',
      description: 'ID of the input field',
    },
    ariaLabel: {
      name: 'Aria Label',
      control: 'text',
      description: 'Accessible label for screen readers (aria-label)',
    },
    ariaLabelledBy: {
      name: 'Aria LabelledBy',
      control: 'text',
      description: 'Accessible label for screen readers (aria-labelledby) ',
    },
  },
  args: {
    label: 'Label',
    disabled: false,
  },
}
export default meta

const Template: StoryFn<{label: string, disabled: boolean, formControlId: string, ariaLabel: string, ariaLabelledBy: string}> = (args: any): HTMLElement => {
  const lbl = document.createElement('label')
  lbl.innerText = args.label
  lbl.classList.add('label')

  if (args.ariaLabel) {
    lbl.setAttribute('aria-label', args.ariaLabel)
  }

  if (args.ariaLabelledBy) {
    lbl.setAttribute('aria-labelledby', args.ariaLabelledBy)
  }

  if (args.disabled) {
    lbl.setAttribute('disabled', 'true')
    lbl.setAttribute('aria-disabled', 'true')
    lbl.classList.add('label--disabled')
  }

  return wrapWithContainer(lbl)
}

export const Primary = Template.bind({})
Primary.args = {
  label: 'Label',
  disabled: false,
}

// Disabled Label Story
export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Disabled Label',
  disabled: true,
}
