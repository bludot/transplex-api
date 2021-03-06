import { Expose } from 'class-transformer'
import { IsBooleanString, IsOptional, IsString } from 'class-validator'

export class TransmissionConfig {
  @Expose()
  @IsString()
  @IsOptional()
  readonly TRANSMISSION_HOST: string

  @Expose()
  @IsString()
  @IsOptional()
  readonly TRANSMISSION_PORT: string

  @Expose()
  @IsString()
  @IsOptional()
  readonly TRANSMISSION_USERNAME: string

  @Expose()
  @IsString()
  @IsOptional()
  readonly TRANSMISSION_PASSWORD: string

  @Expose()
  @IsString()
  @IsOptional()
  readonly TRANSMISSION_URL: string

  @Expose()
  @IsBooleanString()
  @IsOptional()
  readonly TRANSMISSION_SSL: boolean

  @Expose()
  @IsString()
  @IsOptional()
  readonly TRANSMISSION_DOWNLOADS: string
}
