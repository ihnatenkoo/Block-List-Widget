import { ApiProperty } from '@nestjs/swagger';
import { $Enums } from '@prisma/client';
import { IsIn } from 'class-validator';

export class BlockItemDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  blockListId: number;

  @ApiProperty({
    enum: [$Enums.BlockItemType.Keyword, $Enums.BlockItemType.Website],
  })
  type: $Enums.BlockItemType;

  @ApiProperty()
  data: string;

  @ApiProperty()
  createdAt: Date;
}

export class BlockListDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  ownerId: number;

  @ApiProperty({ type: [BlockItemDto] })
  items: BlockItemDto[];
}

export class AddBlockItemDto {
  @ApiProperty({
    enum: [$Enums.BlockItemType.Keyword, $Enums.BlockItemType.Website],
  })
  @IsIn([$Enums.BlockItemType.Keyword, $Enums.BlockItemType.Website])
  type: $Enums.BlockItemType;

  @ApiProperty()
  data: string;
}
