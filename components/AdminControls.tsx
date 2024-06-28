"use client"

import DeleteChatButton from "./DeleteChatButton"
import InviteUser from "./InviteUser"
import LanguageSelect from "./LanguageSelect"


function AdminControls({chatId}:{chatId : string}) {
  return (
    <div className="flex-col flex sm:self-center justify-end space-x-2 m-5 mb-0 md:flex-row  gap-3">
        <LanguageSelect/>
        <InviteUser chatId={chatId}/>

      <DeleteChatButton chatId={chatId}/>

    </div>
  )
}

export default AdminControls
