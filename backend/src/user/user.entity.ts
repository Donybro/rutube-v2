import { Column, Entity, OneToMany } from 'typeorm'
import { IsEmail } from 'class-validator'
import { VideoEntity } from '../video/video.entity'
import { Base } from 'src/utils/base'
import { SubscriptionEntity } from './subscription.entity'

@Entity('User')
export class UserEntity extends Base {
	@IsEmail()
	@Column({ unique: true })
	email: string

	@Column({ select: false })
	password: string

	@Column({ default: '' })
	name: string

	@Column({ default: '', type: 'text' })
	description: string

	@Column({ default: '', name: 'avatar_path' })
	avatarPath: string

	@Column({ default: false, name: 'is_verified' })
	isVerified: boolean

	@Column({ default: 0, name: 'subscribers_count' })
	subscribersCount?: number

	@OneToMany(() => VideoEntity, video => video.user)
	videos: VideoEntity[]

	@OneToMany(() => SubscriptionEntity, sub => sub.fromUser)
	subscriptions: SubscriptionEntity[]

	@OneToMany(() => SubscriptionEntity, sub => sub.toChannel)
	subscribers: SubscriptionEntity[]
}
