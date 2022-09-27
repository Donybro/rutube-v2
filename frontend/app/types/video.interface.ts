import { IComment } from '@/types/comment.interface'
import { IUser } from '@/types/user.interface'

export interface IVideo {
	user: IUser
	comments: IComment[]
	name: string
	isPublic: boolean
	views?: number
	likes?: number
	duration?: number
	videoPath: string
	thumbnailPath: string
}

export interface IVideoDto
	extends Pick<
		IVideo,
		// @ts-ignore
		'id' | 'thumbnailPath' | 'description' | 'name' | 'videoPath' | 'isPublic'
	> {}
