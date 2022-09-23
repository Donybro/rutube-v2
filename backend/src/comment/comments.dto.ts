import { IsNumber, IsString } from 'class-validator'

export class CommentsDto {
	@IsString()
	message: string

	@IsNumber()
	videoId: number
}
