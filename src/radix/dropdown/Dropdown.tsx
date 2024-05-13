import { useState } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './Dropdown.module.css'

export const Dropdown = () => {
  // bookmarksChecked ставит галочку при клике
  const [bookmarksChecked, setBookmarksChecked] = useState(true)
  // urlsChecked ставит галочку при клике
  const [urlsChecked, setUrlsChecked] = useState(false)
  // person устанавливает значение имени при клике
  const [person, setPerson] = useState('pedro')

  return (
    <DropdownMenu.Root>
      {/* =================================================================================================================== */}
      {/* кнопка открытия меню */}

      <DropdownMenu.Trigger asChild>
        <button className={s.IconButton}>🟢</button>
      </DropdownMenu.Trigger>

      {/* =================================================================================================================== */}

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.DropdownMenuContent} sideOffset={5}>
          {/* =================================================================================================================== */}
          {/* обычные элементы меню */}

          <DropdownMenu.Item className={s.DropdownMenuItem}>
            New Tab <div className={s.RightSlot}>⌘+T</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className={s.DropdownMenuItem}>
            New Window <div className={s.RightSlot}>⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className={s.DropdownMenuItem}>
            New Private Window <div className={s.RightSlot}>⇧+⌘+N</div>
          </DropdownMenu.Item>

          {/* =================================================================================================================== */}
          {/* внутренее меню */}

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className={s.DropdownMenuSubTrigger}>
              More Tools
              <div className={s.RightSlot}>🔴</div>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent
                alignOffset={-5}
                className={'DropdownMenuSubContent'}
                sideOffset={2}
              >
                <DropdownMenu.Item className={s.DropdownMenuItem}>
                  Save Page As… <div className={s.RightSlot}>⌘+S</div>
                </DropdownMenu.Item>
                <DropdownMenu.Item className={s.DropdownMenuItem}>
                  Create Shortcut…
                </DropdownMenu.Item>
                <DropdownMenu.Item className={s.DropdownMenuItem}>Name Window…</DropdownMenu.Item>
                <DropdownMenu.Separator className={s.DropdownMenuSeparator} />
                <DropdownMenu.Item className={s.DropdownMenuItem}>
                  Developer Tools
                </DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          {/* =================================================================================================================== */}

          <DropdownMenu.Separator className={s.DropdownMenuSeparator} />

          {/* =================================================================================================================== */}
          {/* Галочка при клике */}

          <DropdownMenu.CheckboxItem
            checked={bookmarksChecked}
            className={s.DropdownMenuCheckboxItem}
            onCheckedChange={setBookmarksChecked}
          >
            <DropdownMenu.ItemIndicator className={s.DropdownMenuItemIndicator}>
              🟡
            </DropdownMenu.ItemIndicator>
            Show Bookmarks <div className={s.RightSlot}>⌘+B</div>
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem
            checked={urlsChecked}
            className={s.DropdownMenuCheckboxItem}
            onCheckedChange={setUrlsChecked}
          >
            <DropdownMenu.ItemIndicator className={s.DropdownMenuItemIndicator}>
              🟡
            </DropdownMenu.ItemIndicator>
            Show Full URLs
          </DropdownMenu.CheckboxItem>

          {/* =================================================================================================================== */}

          <DropdownMenu.Separator className={s.DropdownMenuSeparator} />

          {/* =================================================================================================================== */}
          {/* Галочка при клике */}

          <DropdownMenu.Label className={s.DropdownMenuLabel}>People</DropdownMenu.Label>
          <DropdownMenu.RadioGroup onValueChange={setPerson} value={person}>
            <DropdownMenu.RadioItem className={s.DropdownMenuRadioItem} value={'pedro'}>
              <DropdownMenu.ItemIndicator className={s.DropdownMenuItemIndicator}>
                🟣
              </DropdownMenu.ItemIndicator>
              Pedro Duarte
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem className={s.DropdownMenuRadioItem} value={'colm'}>
              <DropdownMenu.ItemIndicator className={s.DropdownMenuItemIndicator}>
                🟣
              </DropdownMenu.ItemIndicator>
              Colm Tuite
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>

          {/* =================================================================================================================== */}
          {/* стрелочка сверху на меню */}

          <DropdownMenu.Arrow className={s.DropdownMenuArrow} />

          {/* =================================================================================================================== */}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
