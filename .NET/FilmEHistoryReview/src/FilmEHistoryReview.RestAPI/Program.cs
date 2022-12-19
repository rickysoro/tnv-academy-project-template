
using FilmEHistoryReview.Core.Manager;
using FilmEHistoryReview.Core.Service;
using FilmEHistoryReview.DB;

namespace FilmEHistoryReview.RestAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            /*** Aggiungo un Singleton per il quale indico che possiedo un'interfaccia che dichiara i metodi di storing (IStorageService) e che la classe che 
             * implementa questi metodi è MySqlStorageService ***/
            builder.Services.AddSingleton<IStorageService, MySqlStorageService>();
            // Aggiungo un Singleton al quale assegno la classe che mi consente di gestire lo storing attraverso la dependency injection 
            builder.Services.AddSingleton<ReviewsManager>();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}