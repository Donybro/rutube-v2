import { IBase } from '@/types/base.interface'
import { ISubscription } from '@/types/subscription.interface'
import { IVideo } from '@/types/video.interface'

export interface IUser extends IBase {
	email: string
	password: string
	name: string
	description: string
	avatarPath: string
	isVerified?: boolean
	subscribersCount?: number
	videos: IVideo[]
	subscriptions: ISubscription[]
}
