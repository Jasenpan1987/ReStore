using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiControllerAttribute]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        public StoreContext _ctx { get; }
        
        public ProductsController(StoreContext ctx)
        {
            _ctx = ctx;
        }

        [HttpGet]
        public ActionResult<List<Product>> GetProducts()
        {
            var products = _ctx.Products.ToList();

            return Ok(products);
        }

        [HttpGet("{id}")] // api/products/2
        public ActionResult<Product> GetProduct(int id)
        {
            return _ctx.Products.Find(id);
        }
    }
}