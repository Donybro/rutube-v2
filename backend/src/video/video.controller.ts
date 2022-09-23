import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	Query,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { VideoService } from './video.service'
import { Auth } from '../auth/decarators/auth.decorator'
import { CurrentUser } from '../user/user.decorator'
import { VideoDto } from './video.dto'

@Controller('video')
export class VideoController {
	constructor(private readonly videoService: VideoService) {}

	@Get('get-private/:id')
	@Auth()
	async getPrivateVideo(@Param('id') id: string) {
		return this.videoService.byId(+id)
	}

	@Get('by-id/:id')
	async getVideoById(@Param('id') id: string) {
		return this.videoService.byId(+id)
	}

	@Get('all')
	async getAllVideos(@Query('searchTerm') searchTerm?: string) {
		return this.videoService.getAllVideo(searchTerm)
	}

	@Get('most-popular')
	async getMostPopularVideos() {
		return this.videoService.getMostPopularVideos()
	}

	@Post('')
	@HttpCode(200)
	@Auth()
	async createVideo(@CurrentUser('id') id: string) {
		return this.videoService.createVideo(+id)
	}

	@Put(':id')
	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	async updateVideo(@Param('id') id: string, @Body() dto: VideoDto) {
		return this.videoService.updateVideo(+id, dto)
	}

	@Delete(':id')
	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	async deleteVideo(@Param('id') id: string) {
		return this.videoService.deleteVideo(+id)
	}

	@Put('update-views/:videId')
	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	async updateViews(@Param('videId') videId: string) {
		return this.videoService.updateViews(+videId)
	}

	@Put('update-likes/:videId')
	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	async updateLikes(@Param('videId') videId: string) {
		return this.videoService.updateReaction(+videId)
	}
}
