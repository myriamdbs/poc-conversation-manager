export interface User {
  id: number
  nickname: string
  token: string
}

export type Correspondant = Pick<User, 'id' | 'nickname'>
