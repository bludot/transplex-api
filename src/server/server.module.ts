import { DynamicModule, Module } from '@nestjs/common'
import { ScheduleModule } from '@nestjs/schedule'
import { WatchlistApiModule } from '../modules/watchlist-api/watchlist-api.module'
import { NyaapiApiModule } from '../modules/nyaapi-api/nyaapi-api.module'
import { ConfigService } from '../modules/config/config.service'
import { HealthcheckModule } from '../modules/healthcheck/healthcheck.module'
import { TransmissionAPIModule } from '../modules/transmission-api/transmission-api.module'
import { TypeormConnectorModule } from '../modules/postgres-connector/postgres-connector.module'
import { SearchApiModule } from '../modules/search-api/search-api.module'
import { MetadataApiModule } from '../modules/metadata-api/metadata-api.module'
import { MediaApiModule } from '../modules/media-api/media-api.module'
import { DownloadsApiModule } from '../modules/downloads-api/downloads-api.module'
import { EventsModule } from '../modules/events/events.module'
import { ImportApiModule } from '../modules/import-api/import-api.module'
import { SettingsApiModule } from '../modules/settings-api/settings-api.module'
import { SettingsModule } from '../modules/settings/settings.module'
import { TheTvDbApiModule } from '../modules/thetvdbapi/thetvdbapi.module'
import { FileManagerApiModule } from '../modules/file-manager-api/file-manager-api.module'
import { ServerConfig } from './server.config'

@Module({
  imports: [HealthcheckModule, TypeormConnectorModule, SettingsModule],
})
export class ServerModule {
  static forRoot(config: ConfigService<ServerConfig>): DynamicModule {
    return {
      module: ServerModule,
      imports: [
        ScheduleModule.forRoot(),
        ...(config ? [HealthcheckModule] : []),
        TransmissionAPIModule,
        NyaapiApiModule,
        WatchlistApiModule,
        SearchApiModule,
        MetadataApiModule,
        MediaApiModule,
        DownloadsApiModule,
        EventsModule,
        ImportApiModule,
        SettingsApiModule,
        TheTvDbApiModule,
        FileManagerApiModule,
      ],
    }
  }
}
