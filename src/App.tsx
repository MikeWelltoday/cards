import { TextField } from '@/components/TextField/TextField'

export function App() {
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
        rowGap: '40px',
        width: '100vw',
      }}
    >
      <TextField placeholder={'Name'} type={'text'} />
      <TextField placeholder={'Password'} type={'password'} />
    </div>
  )
}
