import {
	Body,
	Controller,
	Get,
	HttpCode,
	Param,
	Patch,
	Put,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { UserService } from './user.service'
import { Auth } from '../auth/decarators/auth.decorator'
import { CurrentUser } from './user.decorator'
import { UserDto } from './user.dto'

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get('profile')
	@Auth()
	async getProfile(@CurrentUser('id') id: number) {
		return this.userService.byId(id)
	}

	@Get('by-id/:id')
	@Auth()
	async getUser(@Param('id') id: string) {
		return this.userService.byId(+id)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put(':id')
	@Auth()
	async updateUser(@Param('id') id: string, @Body() dto: UserDto) {
		return this.userService.updateProfile(+id, dto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Patch('subscriber/:channelId')
	@Auth()
	async subscribeToChannel(
		@CurrentUser('id') id: number,
		@Param('channelId') channelId: string
	) {
		return this.userService.subscribe(+id, +channelId)
	}

	@Get('all')
	async getUsers() {
		return await this.userService.getAll()
	}
}
