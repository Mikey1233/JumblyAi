import React from 'react'
import { generatePortalLink } from '@/actions/generatePortalLink'

function ManageAccountBtn() {
  return (
    <div>
       <form action={generatePortalLink}>
      <button type="submit">Manage Billing</button>
    </form>
    </div>
  )
}

export default ManageAccountBtn
