import { IVideo } from '@/types/video.interface'

import { axiosClassic } from '../../api/axios'

const VIDEO = 'video'

export const VideService = {
	async getAll() {
		return axiosClassic.get<IVideo[]>(`/${VIDEO}`)
	},
	async getMostPopularVideo() {
		return axiosClassic.get<IVideo[]>(`/${VIDEO}/most-popular`)
	}
}
