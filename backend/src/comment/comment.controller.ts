import {
	Body,
	Controller,
	HttpCode,
	Post,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { CommentService } from './comment.service'
import { CurrentUser } from '../user/user.decorator'
import { CommentsDto } from './comments.dto'
import { Auth } from 'src/auth/decarators/auth.decorator'

@Controller('comment')
export class CommentController {
	constructor(private readonly commentService: CommentService) {}

	// make insomnia test comments api

	@Post()
	@Auth()
	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	async createComment(@CurrentUser('id') id: string, @Body() dto: CommentsDto) {
		return this.commentService.create(+id, dto)
	}
}
