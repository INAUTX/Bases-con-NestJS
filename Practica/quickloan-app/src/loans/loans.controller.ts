import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';

@Controller('loans')
export class LoansController {
  @Post()
  // @UsePipes(new ValidationPipe()) // Applying a pipe validation only to the controller
  createLoan(@Body() createLoanDto: any) {
      return `Loan created for ${createLoanDto.userId}`;
  }

  @Get(':id')
  getLoanStatus(@Param('id') id: string) {
    return `Status of loan ${id}`;
  }
}